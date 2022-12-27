// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrendUpBulkSvg from '@ant-design/icons-svg/lib/asn/TrendUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrendUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrendUpBulk: TrendUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrendUpBulkSvg}></AntdIcon>;
};

TrendUpBulk.displayName = 'TrendUpBulk';
TrendUpBulk.inheritAttrs = false;
export default TrendUpBulk;