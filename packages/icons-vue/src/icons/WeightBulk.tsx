// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightBulkSvg from '@ant-design/icons-svg/lib/asn/WeightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightBulk: WeightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightBulkSvg}></AntdIcon>;
};

WeightBulk.displayName = 'WeightBulk';
WeightBulk.inheritAttrs = false;
export default WeightBulk;