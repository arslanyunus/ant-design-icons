// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeBulkSvg from '@ant-design/icons-svg/lib/asn/BoxTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeBulk: BoxTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeBulkSvg}></AntdIcon>;
};

BoxTimeBulk.displayName = 'BoxTimeBulk';
BoxTimeBulk.inheritAttrs = false;
export default BoxTimeBulk;