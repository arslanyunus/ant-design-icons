// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddBulkSvg from '@ant-design/icons-svg/lib/asn/SaveAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddBulk: SaveAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddBulkSvg}></AntdIcon>;
};

SaveAddBulk.displayName = 'SaveAddBulk';
SaveAddBulk.inheritAttrs = false;
export default SaveAddBulk;