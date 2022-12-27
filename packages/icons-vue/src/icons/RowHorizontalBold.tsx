// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalBoldSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalBold: RowHorizontalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalBoldSvg}></AntdIcon>;
};

RowHorizontalBold.displayName = 'RowHorizontalBold';
RowHorizontalBold.inheritAttrs = false;
export default RowHorizontalBold;