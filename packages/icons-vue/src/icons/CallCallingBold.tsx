// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingBoldSvg from '@ant-design/icons-svg/lib/asn/CallCallingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingBold: CallCallingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingBoldSvg}></AntdIcon>;
};

CallCallingBold.displayName = 'CallCallingBold';
CallCallingBold.inheritAttrs = false;
export default CallCallingBold;