// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusBulkSvg from '@ant-design/icons-svg/lib/asn/SaveMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusBulk: SaveMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusBulkSvg}></AntdIcon>;
};

SaveMinusBulk.displayName = 'SaveMinusBulk';
SaveMinusBulk.inheritAttrs = false;
export default SaveMinusBulk;