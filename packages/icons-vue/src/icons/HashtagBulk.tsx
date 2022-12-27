// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagBulkSvg from '@ant-design/icons-svg/lib/asn/HashtagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagBulk: HashtagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagBulkSvg}></AntdIcon>;
};

HashtagBulk.displayName = 'HashtagBulk';
HashtagBulk.inheritAttrs = false;
export default HashtagBulk;