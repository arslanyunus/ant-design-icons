// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OmegaSquareBulkSvg from '@ant-design/icons-svg/lib/asn/OmegaSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OmegaSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OmegaSquareBulk: OmegaSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OmegaSquareBulkSvg}></AntdIcon>;
};

OmegaSquareBulk.displayName = 'OmegaSquareBulk';
OmegaSquareBulk.inheritAttrs = false;
export default OmegaSquareBulk;