// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolOutlineSvg from '@ant-design/icons-svg/lib/asn/PenToolOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolOutline: PenToolOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolOutlineSvg}></AntdIcon>;
};

PenToolOutline.displayName = 'PenToolOutline';
PenToolOutline.inheritAttrs = false;
export default PenToolOutline;