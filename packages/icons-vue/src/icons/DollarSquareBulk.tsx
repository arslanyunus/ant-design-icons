// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarSquareBulkSvg from '@ant-design/icons-svg/lib/asn/DollarSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarSquareBulk: DollarSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarSquareBulkSvg}></AntdIcon>;
};

DollarSquareBulk.displayName = 'DollarSquareBulk';
DollarSquareBulk.inheritAttrs = false;
export default DollarSquareBulk;