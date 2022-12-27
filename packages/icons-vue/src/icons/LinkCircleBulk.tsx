// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleBulkSvg from '@ant-design/icons-svg/lib/asn/LinkCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleBulk: LinkCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleBulkSvg}></AntdIcon>;
};

LinkCircleBulk.displayName = 'LinkCircleBulk';
LinkCircleBulk.inheritAttrs = false;
export default LinkCircleBulk;