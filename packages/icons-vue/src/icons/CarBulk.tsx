// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarBulkSvg from '@ant-design/icons-svg/lib/asn/CarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarBulk: CarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarBulkSvg}></AntdIcon>;
};

CarBulk.displayName = 'CarBulk';
CarBulk.inheritAttrs = false;
export default CarBulk;