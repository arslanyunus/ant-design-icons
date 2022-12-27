// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TickCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/TickCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TickCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TickCircleOutline: TickCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TickCircleOutlineSvg}></AntdIcon>;
};

TickCircleOutline.displayName = 'TickCircleOutline';
TickCircleOutline.inheritAttrs = false;
export default TickCircleOutline;