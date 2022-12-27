// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingOutlineSvg from '@ant-design/icons-svg/lib/asn/CallIncomingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingOutline: CallIncomingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingOutlineSvg}></AntdIcon>;
};

CallIncomingOutline.displayName = 'CallIncomingOutline';
CallIncomingOutline.inheritAttrs = false;
export default CallIncomingOutline;