// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareOutline: PercentageSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareOutlineSvg}></AntdIcon>;
};

PercentageSquareOutline.displayName = 'PercentageSquareOutline';
PercentageSquareOutline.inheritAttrs = false;
export default PercentageSquareOutline;