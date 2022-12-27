// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalOutlineSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalOutline: RowHorizontalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalOutlineSvg}></AntdIcon>;
};

RowHorizontalOutline.displayName = 'RowHorizontalOutline';
RowHorizontalOutline.inheritAttrs = false;
export default RowHorizontalOutline;