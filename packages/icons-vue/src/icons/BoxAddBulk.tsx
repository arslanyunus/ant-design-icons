// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddBulkSvg from '@ant-design/icons-svg/lib/asn/BoxAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddBulk: BoxAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddBulkSvg}></AntdIcon>;
};

BoxAddBulk.displayName = 'BoxAddBulk';
BoxAddBulk.inheritAttrs = false;
export default BoxAddBulk;