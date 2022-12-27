// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoffeeBulkSvg from '@ant-design/icons-svg/lib/asn/CoffeeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoffeeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoffeeBulk: CoffeeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoffeeBulkSvg}></AntdIcon>;
};

CoffeeBulk.displayName = 'CoffeeBulk';
CoffeeBulk.inheritAttrs = false;
export default CoffeeBulk;