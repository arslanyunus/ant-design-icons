// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileBulkSvg from '@ant-design/icons-svg/lib/asn/MobileBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileBulk: MobileBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileBulkSvg}></AntdIcon>;
};

MobileBulk.displayName = 'MobileBulk';
MobileBulk.inheritAttrs = false;
export default MobileBulk;