// https://github.com/killercrush/music-tempo/pull/4

declare module "music-tempo" {
  /**
   * Class combines the work of all the steps of tempo extraction
   * @class
   */
  export default class MusicTempo {
    /**
     * Spectral flux
     * @type {Array}
     */
    spectralFlux: unknown[];
    /**
     * Spectral flux peaks indexes
     * @type {Array}
     */
    peaks: unknown[];
    /**
     * Onsets times array
     * @type {Array}
     */
    events: unknown[];
    /**
     * Tempo hypotheses array
     * @type {Array}
     */
    tempoList: unknown[];
    /**
     * Agents array
     * @type {Array}
     */
    agents: unknown[];
    /**
     * The tempo value in beats per minute
     * @type {String}
     */
    tempo: string;
    /**
     * Beat times array
     * @type {Array}
     */
    beats: unknown[];
    /**
     * Inter-beat interval
     * @type {Number}
     */
    beatInterval: number;
    /**
     * The agent with the highest score
     * @type {Agent}
     */
    bestAgent: Agent;

    /**
     * Constructor
     * @param {Float32Array} audioData - non-interleaved IEEE 32-bit linear PCM with a nominal range of -1 -> +1 (Web Audio API - Audio Buffer)
     * @param {Object} [params={}] - parameters
     * @param {Number} [params.bufferSize=2048] - FFT windows size
     * @param {Number} [params.hopSize=441] - spacing of audio frames in samples
     * @param {Number} [params.decayRate=0.84] - how quickly previous peaks are forgotten
     * @param {Number} [params.peakFindingWindow=6] - minimum distance between peaks
     * @param {Number} [params.meanWndMultiplier=3] - multiplier for peak finding window
     * @param {Number} [params.peakThreshold=0.35] - minimum value of peaks
     * @param {Number} [params.widthTreshold=0.025] - the maximum difference in IOIs which are in the same cluster
     * @param {Number} [params.maxIOI=2.5] - the maximum IOI for inclusion in a cluster
     * @param {Number} [params.minIOI=0.07] - the minimum IOI for inclusion in a cluster
     * @param {Number} [params.maxTempos=10] - initial amount of tempo hypotheses
     * @param {Number} [params.minBeatInterval=0.3] - the minimum inter-beat interval (IBI) (0.30 seconds == 200 BPM)
     * @param {Number} [params.maxBeatInterval=1] - the maximum inter-beat interval (IBI) (1.00 seconds ==  60 BPM)
     * @param {Number} [params.initPeriod=5] - duration of the initial section
     * @param {Number} [params.thresholdBI=0.02] - for the purpose of removing duplicate agents, the default JND of IBI
     * @param {Number} [params.thresholdBT=0.04] - for the purpose of removing duplicate agents, the default JND of phase
     * @param {Number} [params.expiryTime=10] - the time after which an Agent that has not accepted any beat will be destroyed
     * @param {Number} [params.toleranceWndInner=0.04] - the maximum time that a beat can deviate from the predicted beat time without a fork occurring
     * @param {Number} [params.toleranceWndPre=0.15] - the maximum amount by which a beat can be earlier than the predicted beat time, expressed as a fraction of the beat period
     * @param {Number} [params.toleranceWndPost=0.3] - the maximum amount by which a beat can be later than the predicted beat time, expressed as a fraction of the beat period
     * @param {Number} [params.correctionFactor=50] - correction factor for updating beat period
     * @param {Number} [params.maxChange=0.2] - the maximum allowed deviation from the initial tempo, expressed as a fraction of the initial beat period
     * @param {Number} [params.penaltyFactor=0.5] - factor for correcting score, if onset do not coincide precisely with predicted beat time
     */
    constructor(
      audioData: Float32Array,
      params?: {
        bufferSize?: number;
        hopSize?: number;
        decayRate?: number;
        peakFindingWindow?: number;
        meanWndMultiplier?: number;
        peakThreshold?: number;
        widthTreshold?: number;
        maxIOI?: number;
        minIOI?: number;
        maxTempos?: number;
        minBeatInterval?: number;
        maxBeatInterval?: number;
        initPeriod?: number;
        thresholdBI?: number;
        thresholdBT?: number;
        expiryTime?: number;
        toleranceWndInner?: number;
        toleranceWndPre?: number;
        toleranceWndPost?: number;
        correctionFactor?: number;
        maxChange?: number;
        penaltyFactor?: number;
      }
    );
  }

  class Agent {
    /**
     * Constructor
     * @param {Number} tempo - tempo hypothesis of the Agent
     * @param {Number} firstBeatTime - the time of the first beat accepted by this Agent
     * @param {Number} firsteventScore - salience value of the first beat accepted by this Agent
     * @param {Array} agentList - reference to the agent list
     * @param {Object} [params={}] - parameters
     * @param {Number} [params.expiryTime=10] - the time after which an Agent that has not accepted any beat will be destroyed
     * @param {Number} [params.toleranceWndInner=0.04] - the maximum time that a beat can deviate from the predicted beat time without a fork occurring
     * @param {Number} [params.toleranceWndPre=0.15] - the maximum amount by which a beat can be earlier than the predicted beat time, expressed as a fraction of the beat period
     * @param {Number} [params.toleranceWndPost=0.3] - the maximum amount by which a beat can be later than the predicted beat time, expressed as a fraction of the beat period
     * @param {Number} [params.correctionFactor=50] - correction factor for updating beat period
     * @param {Number} [params.maxChange=0.2] - the maximum allowed deviation from the initial tempo, expressed as a fraction of the initial beat period
     * @param {Number} [params.penaltyFactor=0.5] - factor for correcting score, if onset do not coincide precisely with predicted beat time
     */
    constructor(
      tempo: number,
      firstBeatTime: number,
      firsteventScore: number,
      agentList: unknown[],
      params?: {
        expiryTime?: number;
        toleranceWndInner?: number;
        toleranceWndPre?: number;
        toleranceWndPost?: number;
        correctionFactor?: number;
        maxChange?: number;
        penaltyFactor?: number;
      }
    );
    /**
     * the time after which an Agent that has not accepted any beat will be destroyed
     * @type {Number}
     */
    expiryTime: number;
    /**
     * the maximum time that a beat can deviate from the predicted beat time without a fork occurring
     * @type {Number}
     */
    toleranceWndInner: number;
    /**
     * the maximum amount by which a beat can be earlier than the predicted beat time, expressed as a fraction of the beat period
     * @type {Number}
     */
    toleranceWndPre: number;
    /**
     * the maximum amount by which a beat can be later than the predicted beat time, expressed as a fraction of the beat period
     * @type {Number}
     */
    toleranceWndPost: number;
    /**
     * correction factor for updating beat period
     * @type {Number}
     */
    correctionFactor: number;
    /**
     * the maximum allowed deviation from the initial tempo, expressed as a fraction of the initial beat period
     * @type {Number}
     */
    maxChange: number;
    /**
     * factor for correcting score, if onset do not coincide precisely with predicted beat time
     * @type {Number}
     */
    penaltyFactor: number;
    /**
     * the current tempo hypothesis of the Agent, expressed as the beat period
     * @type {Number}
     */
    beatInterval: number;
    /**
     * the initial tempo hypothesis of the Agent, expressed as the beat period
     * @type {Number}
     */
    initialBeatInterval: number;
    /**
     * the time of the most recent beat accepted by this Agent
     * @type {Number}
     */
    beatTime: number;
    /**
     * the number of beats found by this Agent, including interpolated beats
     * @type {Number}
     */
    totalBeatCount: number;
    /**
     * the array of onsets accepted by this Agent as beats, plus interpolated beats
     * @type {Array}
     */
    events: unknown[];
    /**
     * sum of salience values of the onsets which have been interpreted as beats by this Agent
     * @type {Number}
     */
    score: number;
    /**
     * reference to the agent list
     * @type {Array}
     */
    agentListRef: Agent[];
    /**
     * The event time is tested if it is a beat time
     * @param {Number} eventTime - the event time to be tested
     * @param {Number} eventScore - salience values of the event time
     * @return {Boolean} indicate whether the given event time was accepted as a beat time
     */
    considerEvent(eventTime: number, eventScore: number): boolean;
    /**
     * Accept the event time as a beat time, and update the state of the Agent accordingly
     * @param {Number} eventTime - the event time to be accepted
     * @param {Number} eventScore - salience values of the event time
     * @param {Number} err - the difference between the predicted and actual beat times
     * @param {Number} beatCount - the number of beats since the last beat
     */
    acceptEvent(eventTime: number, eventScore: number, err: number, beatCount: number): void;
    /**
     * Interpolates missing beats in the Agent's beat track
     */
    fillBeats(): void;
    /**
     * Makes a clone of the Agent
     * @return {Agent} agent's clone
     */
    clone(): Agent;
  }
}
