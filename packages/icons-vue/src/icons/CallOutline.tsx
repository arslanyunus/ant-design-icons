// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutlineSvg from '@ant-design/icons-svg/lib/asn/CallOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutline: CallOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutlineSvg}></AntdIcon>;
};

CallOutline.displayName = 'CallOutline';
CallOutline.inheritAttrs = false;
export default CallOutline;