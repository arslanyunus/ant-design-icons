// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpBulkSvg from '@ant-design/icons-svg/lib/asn/HashtagUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpBulk: HashtagUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpBulkSvg}></AntdIcon>;
};

HashtagUpBulk.displayName = 'HashtagUpBulk';
HashtagUpBulk.inheritAttrs = false;
export default HashtagUpBulk;