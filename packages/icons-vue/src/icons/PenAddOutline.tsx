// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddOutlineSvg from '@ant-design/icons-svg/lib/asn/PenAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddOutline: PenAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddOutlineSvg}></AntdIcon>;
};

PenAddOutline.displayName = 'PenAddOutline';
PenAddOutline.inheritAttrs = false;
export default PenAddOutline;