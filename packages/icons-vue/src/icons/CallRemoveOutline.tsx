// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/CallRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallRemoveOutline: CallRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallRemoveOutlineSvg}></AntdIcon>;
};

CallRemoveOutline.displayName = 'CallRemoveOutline';
CallRemoveOutline.inheritAttrs = false;
export default CallRemoveOutline;