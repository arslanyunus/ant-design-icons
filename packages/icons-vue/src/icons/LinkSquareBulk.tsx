// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkSquareBulkSvg from '@ant-design/icons-svg/lib/asn/LinkSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkSquareBulk: LinkSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSquareBulkSvg}></AntdIcon>;
};

LinkSquareBulk.displayName = 'LinkSquareBulk';
LinkSquareBulk.inheritAttrs = false;
export default LinkSquareBulk;