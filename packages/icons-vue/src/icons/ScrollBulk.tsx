// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScrollBulkSvg from '@ant-design/icons-svg/lib/asn/ScrollBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScrollBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScrollBulk: ScrollBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScrollBulkSvg}></AntdIcon>;
};

ScrollBulk.displayName = 'ScrollBulk';
ScrollBulk.inheritAttrs = false;
export default ScrollBulk;