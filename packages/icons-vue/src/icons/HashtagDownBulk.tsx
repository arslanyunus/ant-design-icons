// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownBulkSvg from '@ant-design/icons-svg/lib/asn/HashtagDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownBulk: HashtagDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownBulkSvg}></AntdIcon>;
};

HashtagDownBulk.displayName = 'HashtagDownBulk';
HashtagDownBulk.inheritAttrs = false;
export default HashtagDownBulk;