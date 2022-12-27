// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveBulk: SaveRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveBulkSvg}></AntdIcon>;
};

SaveRemoveBulk.displayName = 'SaveRemoveBulk';
SaveRemoveBulk.inheritAttrs = false;
export default SaveRemoveBulk;