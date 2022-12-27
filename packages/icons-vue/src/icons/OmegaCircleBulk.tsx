// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaCircleBulkSvg from '@ant-design/icons-svg/lib/asn/OmegaCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaCircleBulk: OmegaCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaCircleBulkSvg}></AntdIcon>;
};

OmegaCircleBulk.displayName = 'OmegaCircleBulk';
OmegaCircleBulk.inheritAttrs = false;
export default OmegaCircleBulk;