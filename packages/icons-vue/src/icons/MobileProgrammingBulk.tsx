// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileProgrammingBulkSvg from '@ant-design/icons-svg/lib/asn/MobileProgrammingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileProgrammingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileProgrammingBulk: MobileProgrammingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileProgrammingBulkSvg}></AntdIcon>;
};

MobileProgrammingBulk.displayName = 'MobileProgrammingBulk';
MobileProgrammingBulk.inheritAttrs = false;
export default MobileProgrammingBulk;