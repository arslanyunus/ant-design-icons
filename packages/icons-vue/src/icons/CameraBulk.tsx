// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraBulkSvg from '@ant-design/icons-svg/lib/asn/CameraBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraBulk: CameraBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraBulkSvg}></AntdIcon>;
};

CameraBulk.displayName = 'CameraBulk';
CameraBulk.inheritAttrs = false;
export default CameraBulk;