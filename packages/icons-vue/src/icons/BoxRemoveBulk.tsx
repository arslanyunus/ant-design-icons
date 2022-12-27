// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/BoxRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxRemoveBulk: BoxRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxRemoveBulkSvg}></AntdIcon>;
};

BoxRemoveBulk.displayName = 'BoxRemoveBulk';
BoxRemoveBulk.inheritAttrs = false;
export default BoxRemoveBulk;