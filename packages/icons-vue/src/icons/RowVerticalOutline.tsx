// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalOutlineSvg from '@ant-design/icons-svg/lib/asn/RowVerticalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalOutline: RowVerticalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalOutlineSvg}></AntdIcon>;
};

RowVerticalOutline.displayName = 'RowVerticalOutline';
RowVerticalOutline.inheritAttrs = false;
export default RowVerticalOutline;