// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteBulkSvg from '@ant-design/icons-svg/lib/asn/StickynoteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteBulk: StickynoteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteBulkSvg}></AntdIcon>;
};

StickynoteBulk.displayName = 'StickynoteBulk';
StickynoteBulk.inheritAttrs = false;
export default StickynoteBulk;