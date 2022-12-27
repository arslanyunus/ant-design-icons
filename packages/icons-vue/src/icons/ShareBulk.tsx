// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareBulkSvg from '@ant-design/icons-svg/lib/asn/ShareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareBulk: ShareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareBulkSvg}></AntdIcon>;
};

ShareBulk.displayName = 'ShareBulk';
ShareBulk.inheritAttrs = false;
export default ShareBulk;