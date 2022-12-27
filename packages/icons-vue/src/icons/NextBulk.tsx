// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextBulkSvg from '@ant-design/icons-svg/lib/asn/NextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextBulk: NextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextBulkSvg}></AntdIcon>;
};

NextBulk.displayName = 'NextBulk';
NextBulk.inheritAttrs = false;
export default NextBulk;