/**
 *
 * Imagine you have some events. Each event has `type` and relevant `payload` and `timestamp`
 * We want to render these payloads, but ts throws errors
 * Your goal is to come up with idea how we can improve types to be able to run `render` function without any error
 *
 * Notes:
 *      `render`, `renderPublished`, `renderUnpublished`, `renderRemoved` supposed to stay without changes
 **/

interface WebsocketEvent {
  type: 'VACANCY_PUBLISHED' | 'VACANCY_UNPUBLISHED' | 'VACANCY_REMOVED';
  payload: PublishedPayload | UnpublishedPayload | RemovedPayload;
  timestamp: number;
}

type PublishedPayload = {
  id: number;
  message: string;
};

type UnpublishedPayload = {
  error: string;
};

type RemovedPayload = {
  id: number;
};

const events: WebsocketEvent[] = [
  {type: 'VACANCY_PUBLISHED', payload: {id: 1, message: 'success'}, timestamp: 1},
  {type: 'VACANCY_UNPUBLISHED', payload: {error: 'some error'}, timestamp: 2},
  {type: 'VACANCY_REMOVED', payload: {id: 2}, timestamp: 3},
];

function render() {
  events.map(it => {
    if (it.type === 'VACANCY_PUBLISHED') {
      renderPublished(it.payload);
    }

    if (it.type === 'VACANCY_UNPUBLISHED') {
      renderUnpublished(it.payload);
    }

    if (it.type === 'VACANCY_REMOVED') {
      renderRemoved(it.payload);
    }
  });
}

function renderPublished(props: PublishedPayload) {
  return console.log(props.id, props.message);
}

function renderUnpublished(props: UnpublishedPayload) {
  return console.log(props.error);
}

function renderRemoved(props: RemovedPayload) {
  return console.log(props.id);
}
