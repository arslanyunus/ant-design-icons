// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingOutlineSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingOutline: CallOutgoingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingOutlineSvg}></AntdIcon>;
};

CallOutgoingOutline.displayName = 'CallOutgoingOutline';
CallOutgoingOutline.inheritAttrs = false;
export default CallOutgoingOutline;