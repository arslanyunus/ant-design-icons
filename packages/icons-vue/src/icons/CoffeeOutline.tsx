// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeOutlineSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeOutline: CoffeeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeOutlineSvg}></AntdIcon>;
};

CoffeeOutline.displayName = 'CoffeeOutline';
CoffeeOutline.inheritAttrs = false;
export default CoffeeOutline;