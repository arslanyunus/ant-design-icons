// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallAddOutlineSvg from '@ant-design/icons-svg/lib/asn/CallAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallAddOutline: CallAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallAddOutlineSvg}></AntdIcon>;
};

CallAddOutline.displayName = 'CallAddOutline';
CallAddOutline.inheritAttrs = false;
export default CallAddOutline;