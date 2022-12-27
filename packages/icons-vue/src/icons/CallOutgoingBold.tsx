// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingBoldSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingBold: CallOutgoingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingBoldSvg}></AntdIcon>;
};

CallOutgoingBold.displayName = 'CallOutgoingBold';
CallOutgoingBold.inheritAttrs = false;
export default CallOutgoingBold;