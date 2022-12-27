// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkBulkSvg from '@ant-design/icons-svg/lib/asn/LinkBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkBulk: LinkBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkBulkSvg}></AntdIcon>;
};

LinkBulk.displayName = 'LinkBulk';
LinkBulk.inheritAttrs = false;
export default LinkBulk;