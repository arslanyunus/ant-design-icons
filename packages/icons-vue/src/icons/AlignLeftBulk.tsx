// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftBulkSvg from '@ant-design/icons-svg/lib/asn/AlignLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftBulk: AlignLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftBulkSvg}></AntdIcon>;
};

AlignLeftBulk.displayName = 'AlignLeftBulk';
AlignLeftBulk.inheritAttrs = false;
export default AlignLeftBulk;