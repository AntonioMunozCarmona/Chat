import $config from '../src/lib/config';
import sinon from 'sinon';
import {assert} from 'chai';

global.$config = $config;
global.sinon = sinon;
global.assert = assert;


