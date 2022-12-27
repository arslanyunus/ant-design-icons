// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseBulkSvg from '@ant-design/icons-svg/lib/asn/HouseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseBulk: HouseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseBulkSvg}></AntdIcon>;
};

HouseBulk.displayName = 'HouseBulk';
HouseBulk.inheritAttrs = false;
export default HouseBulk;