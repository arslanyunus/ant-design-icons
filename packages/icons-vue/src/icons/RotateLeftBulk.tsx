// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftBulkSvg from '@ant-design/icons-svg/lib/asn/RotateLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftBulk: RotateLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftBulkSvg}></AntdIcon>;
};

RotateLeftBulk.displayName = 'RotateLeftBulk';
RotateLeftBulk.inheritAttrs = false;
export default RotateLeftBulk;