// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendDownBulkSvg from '@ant-design/icons-svg/lib/asn/TrendDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendDownBulk: TrendDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendDownBulkSvg}></AntdIcon>;
};

TrendDownBulk.displayName = 'TrendDownBulk';
TrendDownBulk.inheritAttrs = false;
export default TrendDownBulk;