// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingOutlineSvg from '@ant-design/icons-svg/lib/asn/CallCallingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingOutline: CallCallingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingOutlineSvg}></AntdIcon>;
};

CallCallingOutline.displayName = 'CallCallingOutline';
CallCallingOutline.inheritAttrs = false;
export default CallCallingOutline;