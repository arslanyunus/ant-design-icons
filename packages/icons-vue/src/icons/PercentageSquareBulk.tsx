// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareBulkSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareBulk: PercentageSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareBulkSvg}></AntdIcon>;
};

PercentageSquareBulk.displayName = 'PercentageSquareBulk';
PercentageSquareBulk.inheritAttrs = false;
export default PercentageSquareBulk;