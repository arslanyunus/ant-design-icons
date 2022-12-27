// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardBulkSvg from '@ant-design/icons-svg/lib/asn/SimcardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardBulk: SimcardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardBulkSvg}></AntdIcon>;
};

SimcardBulk.displayName = 'SimcardBulk';
SimcardBulk.inheritAttrs = false;
export default SimcardBulk;