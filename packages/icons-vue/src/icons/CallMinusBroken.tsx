// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/CallMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallMinusBroken: CallMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallMinusBrokenSvg}></AntdIcon>;
};

CallMinusBroken.displayName = 'CallMinusBroken';
CallMinusBroken.inheritAttrs = false;
export default CallMinusBroken;