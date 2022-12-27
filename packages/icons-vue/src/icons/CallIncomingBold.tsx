// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingBoldSvg from '@ant-design/icons-svg/lib/asn/CallIncomingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingBold: CallIncomingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingBoldSvg}></AntdIcon>;
};

CallIncomingBold.displayName = 'CallIncomingBold';
CallIncomingBold.inheritAttrs = false;
export default CallIncomingBold;