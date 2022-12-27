// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchBulkSvg from '@ant-design/icons-svg/lib/asn/BoxSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchBulk: BoxSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchBulkSvg}></AntdIcon>;
};

BoxSearchBulk.displayName = 'BoxSearchBulk';
BoxSearchBulk.inheritAttrs = false;
export default BoxSearchBulk;